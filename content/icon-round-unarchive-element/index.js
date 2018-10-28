import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundUnarchiveElement
 * @class IconRoundUnarchiveElement
 * @extends {AoflElement}
 */
class IconRoundUnarchiveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundUnarchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-unarchive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundUnarchiveElement.is, IconRoundUnarchiveElement);

export default IconRoundUnarchiveElement;
