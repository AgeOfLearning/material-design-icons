import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMmsElement
 * @class IconRoundMmsElement
 * @extends {AoflElement}
 */
class IconRoundMmsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMmsElement.is, IconRoundMmsElement);

export default IconRoundMmsElement;
