import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpClosedCaptionElement
 * @class IconSharpClosedCaptionElement
 * @extends {AoflElement}
 */
class IconSharpClosedCaptionElement extends AoflElement {
  /**
   * Creates an instance of IconSharpClosedCaptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-closed-caption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpClosedCaptionElement.is, IconSharpClosedCaptionElement);

export default IconSharpClosedCaptionElement;
