import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCheckElement
 * @class IconRoundCheckElement
 * @extends {AoflElement}
 */
class IconRoundCheckElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCheckElement.is, IconRoundCheckElement);

export default IconRoundCheckElement;
