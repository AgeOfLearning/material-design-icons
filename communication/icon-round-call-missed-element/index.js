import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallMissedElement
 * @class IconRoundCallMissedElement
 * @extends {AoflElement}
 */
class IconRoundCallMissedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallMissedElement.is, IconRoundCallMissedElement);

export default IconRoundCallMissedElement;
