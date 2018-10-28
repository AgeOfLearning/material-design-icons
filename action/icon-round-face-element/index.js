import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFaceElement
 * @class IconRoundFaceElement
 * @extends {AoflElement}
 */
class IconRoundFaceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-face';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFaceElement.is, IconRoundFaceElement);

export default IconRoundFaceElement;
