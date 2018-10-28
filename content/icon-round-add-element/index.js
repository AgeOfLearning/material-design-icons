import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddElement
 * @class IconRoundAddElement
 * @extends {AoflElement}
 */
class IconRoundAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddElement.is, IconRoundAddElement);

export default IconRoundAddElement;
