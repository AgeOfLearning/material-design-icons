import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTrendingUpElement
 * @class IconBaselineTrendingUpElement
 * @extends {AoflElement}
 */
class IconBaselineTrendingUpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTrendingUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-trending-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTrendingUpElement.is, IconBaselineTrendingUpElement);

export default IconBaselineTrendingUpElement;
