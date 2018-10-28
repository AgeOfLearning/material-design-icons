import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallMadeElement
 * @class IconRoundCallMadeElement
 * @extends {AoflElement}
 */
class IconRoundCallMadeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallMadeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-made';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallMadeElement.is, IconRoundCallMadeElement);

export default IconRoundCallMadeElement;
