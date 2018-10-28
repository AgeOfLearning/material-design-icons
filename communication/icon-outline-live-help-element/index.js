import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLiveHelpElement
 * @class IconOutlineLiveHelpElement
 * @extends {AoflElement}
 */
class IconOutlineLiveHelpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLiveHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-live-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLiveHelpElement.is, IconOutlineLiveHelpElement);

export default IconOutlineLiveHelpElement;
