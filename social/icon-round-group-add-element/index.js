import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGroupAddElement
 * @class IconRoundGroupAddElement
 * @extends {AoflElement}
 */
class IconRoundGroupAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGroupAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-group-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGroupAddElement.is, IconRoundGroupAddElement);

export default IconRoundGroupAddElement;
