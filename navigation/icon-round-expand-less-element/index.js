import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExpandLessElement
 * @class IconRoundExpandLessElement
 * @extends {AoflElement}
 */
class IconRoundExpandLessElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExpandLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-expand-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExpandLessElement.is, IconRoundExpandLessElement);

export default IconRoundExpandLessElement;
