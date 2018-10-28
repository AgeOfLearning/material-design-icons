import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssistantElement
 * @class IconTwotoneAssistantElement
 * @extends {AoflElement}
 */
class IconTwotoneAssistantElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssistantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assistant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssistantElement.is, IconTwotoneAssistantElement);

export default IconTwotoneAssistantElement;
