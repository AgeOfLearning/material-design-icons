import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHearingElement
 * @class IconRoundHearingElement
 * @extends {AoflElement}
 */
class IconRoundHearingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHearingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hearing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHearingElement.is, IconRoundHearingElement);

export default IconRoundHearingElement;
