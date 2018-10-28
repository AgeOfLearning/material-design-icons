import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExpandMoreElement
 * @class IconRoundExpandMoreElement
 * @extends {AoflElement}
 */
class IconRoundExpandMoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExpandMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-expand-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExpandMoreElement.is, IconRoundExpandMoreElement);

export default IconRoundExpandMoreElement;
