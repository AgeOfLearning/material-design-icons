import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInputElement
 * @class IconRoundInputElement
 * @extends {AoflElement}
 */
class IconRoundInputElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInputElement.is, IconRoundInputElement);

export default IconRoundInputElement;
