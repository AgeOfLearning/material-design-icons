import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMobileFriendlyElement
 * @class IconOutlineMobileFriendlyElement
 * @extends {AoflElement}
 */
class IconOutlineMobileFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMobileFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mobile-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMobileFriendlyElement.is, IconOutlineMobileFriendlyElement);

export default IconOutlineMobileFriendlyElement;
