import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChromeReaderModeElement
 * @class IconSharpChromeReaderModeElement
 * @extends {AoflElement}
 */
class IconSharpChromeReaderModeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChromeReaderModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-chrome-reader-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChromeReaderModeElement.is, IconSharpChromeReaderModeElement);

export default IconSharpChromeReaderModeElement;
