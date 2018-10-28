import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTrendingUpElement
 * @class IconOutlineTrendingUpElement
 * @extends {AoflElement}
 */
class IconOutlineTrendingUpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTrendingUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-trending-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTrendingUpElement.is, IconOutlineTrendingUpElement);

export default IconOutlineTrendingUpElement;
