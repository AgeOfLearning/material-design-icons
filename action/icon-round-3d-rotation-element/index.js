import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRound3DRotationElement
 * @class IconRound3DRotationElement
 * @extends {AoflElement}
 */
class IconRound3DRotationElement extends AoflElement {
  /**
   * Creates an instance of IconRound3DRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-3d-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRound3DRotationElement.is, IconRound3DRotationElement);

export default IconRound3DRotationElement;
