import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChromeReaderModeElement
 * @class IconOutlineChromeReaderModeElement
 * @extends {AoflElement}
 */
class IconOutlineChromeReaderModeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChromeReaderModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-chrome-reader-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChromeReaderModeElement.is, IconOutlineChromeReaderModeElement);

export default IconOutlineChromeReaderModeElement;
