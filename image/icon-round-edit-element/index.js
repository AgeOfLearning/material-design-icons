import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEditElement
 * @class IconRoundEditElement
 * @extends {AoflElement}
 */
class IconRoundEditElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEditElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-edit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEditElement.is, IconRoundEditElement);

export default IconRoundEditElement;
