import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundUnfoldLessElement
 * @class IconRoundUnfoldLessElement
 * @extends {AoflElement}
 */
class IconRoundUnfoldLessElement extends AoflElement {
  /**
   * Creates an instance of IconRoundUnfoldLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-unfold-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundUnfoldLessElement.is, IconRoundUnfoldLessElement);

export default IconRoundUnfoldLessElement;
