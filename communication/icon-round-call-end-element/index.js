import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallEndElement
 * @class IconRoundCallEndElement
 * @extends {AoflElement}
 */
class IconRoundCallEndElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallEndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-end';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallEndElement.is, IconRoundCallEndElement);

export default IconRoundCallEndElement;
