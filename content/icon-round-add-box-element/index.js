import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddBoxElement
 * @class IconRoundAddBoxElement
 * @extends {AoflElement}
 */
class IconRoundAddBoxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddBoxElement.is, IconRoundAddBoxElement);

export default IconRoundAddBoxElement;
