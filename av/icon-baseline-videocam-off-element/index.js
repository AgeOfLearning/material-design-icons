import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVideocamOffElement
 * @class IconBaselineVideocamOffElement
 * @extends {AoflElement}
 */
class IconBaselineVideocamOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVideocamOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-videocam-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVideocamOffElement.is, IconBaselineVideocamOffElement);

export default IconBaselineVideocamOffElement;
