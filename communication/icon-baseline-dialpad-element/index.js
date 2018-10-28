import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDialpadElement
 * @class IconBaselineDialpadElement
 * @extends {AoflElement}
 */
class IconBaselineDialpadElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDialpadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-dialpad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDialpadElement.is, IconBaselineDialpadElement);

export default IconBaselineDialpadElement;
