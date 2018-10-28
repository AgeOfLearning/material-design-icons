import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundChromeReaderModeElement
 * @class IconRoundChromeReaderModeElement
 * @extends {AoflElement}
 */
class IconRoundChromeReaderModeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundChromeReaderModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-chrome-reader-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundChromeReaderModeElement.is, IconRoundChromeReaderModeElement);

export default IconRoundChromeReaderModeElement;
