import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatListNumberedElement
 * @class IconRoundFormatListNumberedElement
 * @extends {AoflElement}
 */
class IconRoundFormatListNumberedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatListNumberedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-list-numbered';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatListNumberedElement.is, IconRoundFormatListNumberedElement);

export default IconRoundFormatListNumberedElement;
