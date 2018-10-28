import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMobileFriendlyElement
 * @class IconSharpMobileFriendlyElement
 * @extends {AoflElement}
 */
class IconSharpMobileFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMobileFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mobile-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMobileFriendlyElement.is, IconSharpMobileFriendlyElement);

export default IconSharpMobileFriendlyElement;
