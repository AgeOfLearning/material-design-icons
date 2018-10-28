import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallToActionElement
 * @class IconRoundCallToActionElement
 * @extends {AoflElement}
 */
class IconRoundCallToActionElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallToActionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-to-action';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallToActionElement.is, IconRoundCallToActionElement);

export default IconRoundCallToActionElement;
