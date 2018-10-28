import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundThumbDownAltElement
 * @class IconRoundThumbDownAltElement
 * @extends {AoflElement}
 */
class IconRoundThumbDownAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundThumbDownAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-thumb-down-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundThumbDownAltElement.is, IconRoundThumbDownAltElement);

export default IconRoundThumbDownAltElement;
