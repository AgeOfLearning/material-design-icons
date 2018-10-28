import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPersonAddElement
 * @class IconRoundPersonAddElement
 * @extends {AoflElement}
 */
class IconRoundPersonAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPersonAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-person-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPersonAddElement.is, IconRoundPersonAddElement);

export default IconRoundPersonAddElement;
