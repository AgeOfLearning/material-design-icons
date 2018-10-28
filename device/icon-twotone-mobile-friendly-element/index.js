import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMobileFriendlyElement
 * @class IconTwotoneMobileFriendlyElement
 * @extends {AoflElement}
 */
class IconTwotoneMobileFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMobileFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mobile-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMobileFriendlyElement.is, IconTwotoneMobileFriendlyElement);

export default IconTwotoneMobileFriendlyElement;
