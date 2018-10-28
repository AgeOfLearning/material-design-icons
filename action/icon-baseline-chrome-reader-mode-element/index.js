import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChromeReaderModeElement
 * @class IconBaselineChromeReaderModeElement
 * @extends {AoflElement}
 */
class IconBaselineChromeReaderModeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChromeReaderModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-chrome-reader-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChromeReaderModeElement.is, IconBaselineChromeReaderModeElement);

export default IconBaselineChromeReaderModeElement;
