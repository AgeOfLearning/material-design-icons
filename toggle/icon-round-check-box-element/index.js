import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCheckBoxElement
 * @class IconRoundCheckBoxElement
 * @extends {AoflElement}
 */
class IconRoundCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCheckBoxElement.is, IconRoundCheckBoxElement);

export default IconRoundCheckBoxElement;
