import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChromeReaderModeElement
 * @class IconTwotoneChromeReaderModeElement
 * @extends {AoflElement}
 */
class IconTwotoneChromeReaderModeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChromeReaderModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-chrome-reader-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChromeReaderModeElement.is, IconTwotoneChromeReaderModeElement);

export default IconTwotoneChromeReaderModeElement;
