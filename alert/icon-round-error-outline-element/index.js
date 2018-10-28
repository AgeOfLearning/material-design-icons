import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundErrorOutlineElement
 * @class IconRoundErrorOutlineElement
 * @extends {AoflElement}
 */
class IconRoundErrorOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundErrorOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-error-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundErrorOutlineElement.is, IconRoundErrorOutlineElement);

export default IconRoundErrorOutlineElement;
