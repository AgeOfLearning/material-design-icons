import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPersonAddDisabledElement
 * @class IconRoundPersonAddDisabledElement
 * @extends {AoflElement}
 */
class IconRoundPersonAddDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPersonAddDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-person-add-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPersonAddDisabledElement.is, IconRoundPersonAddDisabledElement);

export default IconRoundPersonAddDisabledElement;
