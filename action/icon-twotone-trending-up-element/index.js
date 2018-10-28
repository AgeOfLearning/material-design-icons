import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTrendingUpElement
 * @class IconTwotoneTrendingUpElement
 * @extends {AoflElement}
 */
class IconTwotoneTrendingUpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTrendingUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-trending-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTrendingUpElement.is, IconTwotoneTrendingUpElement);

export default IconTwotoneTrendingUpElement;
