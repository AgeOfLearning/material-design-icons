import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTapAndPlayElement
 * @class IconOutlineTapAndPlayElement
 * @extends {AoflElement}
 */
class IconOutlineTapAndPlayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTapAndPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tap-and-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTapAndPlayElement.is, IconOutlineTapAndPlayElement);

export default IconOutlineTapAndPlayElement;
