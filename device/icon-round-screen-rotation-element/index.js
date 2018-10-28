import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScreenRotationElement
 * @class IconRoundScreenRotationElement
 * @extends {AoflElement}
 */
class IconRoundScreenRotationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScreenRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-screen-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScreenRotationElement.is, IconRoundScreenRotationElement);

export default IconRoundScreenRotationElement;
