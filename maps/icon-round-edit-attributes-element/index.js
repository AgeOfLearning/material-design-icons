import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEditAttributesElement
 * @class IconRoundEditAttributesElement
 * @extends {AoflElement}
 */
class IconRoundEditAttributesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEditAttributesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-edit-attributes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEditAttributesElement.is, IconRoundEditAttributesElement);

export default IconRoundEditAttributesElement;
