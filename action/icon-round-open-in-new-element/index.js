import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOpenInNewElement
 * @class IconRoundOpenInNewElement
 * @extends {AoflElement}
 */
class IconRoundOpenInNewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOpenInNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-open-in-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOpenInNewElement.is, IconRoundOpenInNewElement);

export default IconRoundOpenInNewElement;
