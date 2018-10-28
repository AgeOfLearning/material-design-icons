import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShowChartElement
 * @class IconTwotoneShowChartElement
 * @extends {AoflElement}
 */
class IconTwotoneShowChartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShowChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-show-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShowChartElement.is, IconTwotoneShowChartElement);

export default IconTwotoneShowChartElement;
