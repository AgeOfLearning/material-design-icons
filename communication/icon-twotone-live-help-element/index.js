import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLiveHelpElement
 * @class IconTwotoneLiveHelpElement
 * @extends {AoflElement}
 */
class IconTwotoneLiveHelpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLiveHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-live-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLiveHelpElement.is, IconTwotoneLiveHelpElement);

export default IconTwotoneLiveHelpElement;
