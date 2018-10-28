import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPausePresentationElement
 * @class IconSharpPausePresentationElement
 * @extends {AoflElement}
 */
class IconSharpPausePresentationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPausePresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pause-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPausePresentationElement.is, IconSharpPausePresentationElement);

export default IconSharpPausePresentationElement;
