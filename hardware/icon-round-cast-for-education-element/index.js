import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCastForEducationElement
 * @class IconRoundCastForEducationElement
 * @extends {AoflElement}
 */
class IconRoundCastForEducationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCastForEducationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cast-for-education';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCastForEducationElement.is, IconRoundCastForEducationElement);

export default IconRoundCastForEducationElement;
