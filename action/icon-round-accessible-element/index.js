import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccessibleElement
 * @class IconRoundAccessibleElement
 * @extends {AoflElement}
 */
class IconRoundAccessibleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccessibleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-accessible';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccessibleElement.is, IconRoundAccessibleElement);

export default IconRoundAccessibleElement;
