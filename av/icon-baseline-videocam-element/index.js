import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVideocamElement
 * @class IconBaselineVideocamElement
 * @extends {AoflElement}
 */
class IconBaselineVideocamElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVideocamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-videocam';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVideocamElement.is, IconBaselineVideocamElement);

export default IconBaselineVideocamElement;
